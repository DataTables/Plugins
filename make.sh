#!/bin/bash

DT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/../.."
if [ "$1" = "debug" ]; then
	DEBUG="debug"
else
	OUT_DIR=$1
	DEBUG=$2
fi

# If not run from DataTables build script, redirect to there
if [ -z "$DT_BUILD" ]; then
	cd $DT_DIR/build
	./make.sh extension Plugins $DEBUG
	cd -
	exit
fi


function ts_plugin {
	local SRC_FILE=$1
	local DEST_DIR=$2
	local REQUIRE=${3:-'jquery datatables.net'}
	local FILE_NAME=$(basename $SRC_FILE)

	# Remove extension
	FILE_NAME="${FILE_NAME%.*}"

	if [ -z "$DEST_DIR" ]; then
		DEST_DIR=$(dirname $(dirname $SRC_FILE))
	fi

	./node_modules/.bin/tsc \
		--target esnext \
		--moduleResolution node \
		--outDir $DEST_DIR \
		--declaration \
		--allowSyntheticDefaultImports \
		$SRC_FILE

	# Remove import statements - the wrap will add them
	sed -i '/^import /d' $DEST_DIR/$FILE_NAME.js

	js_wrap $DEST_DIR/$FILE_NAME.js "$REQUIRE"
}

function js_plugin {
	local SRC_FILE=$1
	local REQUIRE=${2:-'jquery datatables.net'}
	local DEST_DIR=$(dirname $(dirname $SRC_FILE))
	local FILE_NAME=$(basename $SRC_FILE)

	cp $SRC_FILE $DEST_DIR/$FILE_NAME
	js_wrap $DEST_DIR/$FILE_NAME "$REQUIRE"
}

function lang_plugin {
	local SRC_FILE=$1
	local DEST_DIR=$(dirname $SRC_FILE)
	local FILE_NAME=$(basename $SRC_FILE)

	FILE_NAME="${FILE_NAME%.*}"

	echo_msg "  Language $FILE_NAME"
	JSON=$(<$SRC_FILE)

	echo -n " " # ??? Without this the echo below outputs non-utf8 characters
	echo "export default $JSON;" > $DEST_DIR/$FILE_NAME.mjs
	cat << EOF > $DEST_DIR/$FILE_NAME.js
(function( factory ) {
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( [], factory);
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = factory();
	}
	// No browser loader - use JSON, ESM, CJS or AMD
}
(function() {
    return $JSON;
}));
EOF
}

# Change into script's own dir
cd $(dirname $0)

if [ ! -d node_modules ]; then
	npm install
fi

DT_SRC=$(dirname $(dirname $(pwd)))
DT_BUILT="${DT_SRC}/built/DataTables"
. $DT_SRC/build/include.sh

PLUGINS="${DT_SRC}/extensions/Plugins"

if [ ! -e $DT_BUILT/extensions/Plugins ]; then
	ln -s $PLUGINS $DT_BUILT/extensions/Plugins
fi

# for file in $PLUGINS/api/src/*.ts; do
# 	ts_plugin $file
# done

# for file in $PLUGINS/buttons/src/*.ts; do
# 	ts_plugin $file
# done

# for file in $PLUGINS/dataRender/src/*.ts; do
# 	ts_plugin $file
# done

for FEATURE_DIR in $PLUGINS/features/*; do
	if [ -e "$FEATURE_DIR/examples" ]; then
		# Newer - more complete style
		NAME=$(basename $FEATURE_DIR)

		## Build TS if there is a ts file
		ts_plugin $FEATURE_DIR/src/dataTables.$NAME.ts $FEATURE_DIR/dist

		cp $FEATURE_DIR/src/types.d.ts $FEATURE_DIR/dist

		## Build SCSS
		cp $FEATURE_DIR/src/dataTables.$NAME.scss $FEATURE_DIR/dist
		scss_compile $FEATURE_DIR/dist/dataTables.$NAME.scss
		rm $FEATURE_DIR/dist/dataTables.$NAME.scss

		## Build examples
		if [ -d $FEATURE_DIR/dist/examples ]; then
			rm -r $FEATURE_DIR/dist/examples
		fi

		# Build happens in the path that is http available, despite it just being a symlink
		cp -r $FEATURE_DIR/examples $FEATURE_DIR/dist/examples
		examples_process $DT_BUILT/extensions/Plugins/features/$NAME/dist
	# else
	# 	# Old style
	# 	for file in $FEATURE_DIR/src/*.ts; do
	# 		ts_plugin $file
	# 	done
	fi
done

# for file in $PLUGINS/sorting/src/*.ts; do
# 	ts_plugin $file
# done

# for file in $PLUGINS/type-detection/src/*.ts; do
# 	ts_plugin $file
# done

# for file in $PLUGINS/filtering/type-based/src/*.ts; do
# 	ts_plugin $file
# done

# echo_section "  Languages"
# for file in $PLUGINS/i18n/*.json; do
# 	lang_plugin $file
# done

