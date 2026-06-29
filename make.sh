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
	local REQUIRE=${3:-'datatables.net'}
	local FILE_NAME=$(basename $SRC_FILE)
	local VERSION=$(dt_version)

	# Remove extension
	FILE_NAME="${FILE_NAME%.*}"

	if [ -z "$DEST_DIR" ]; then
		DEST_DIR=$(dirname $(dirname $SRC_FILE))
	fi

	../../node_modules/.bin/tsc \
		--target es6 \
		--moduleResolution node \
		--outDir $DEST_DIR \
		--declaration \
		--skipLibCheck \
		--allowSyntheticDefaultImports \
		$SRC_FILE

	# Remove import statements - the wrap will add them
	# sed -i '/^import /d' $DEST_DIR/$FILE_NAME.js

	js_wrap $DEST_DIR/$FILE_NAME.js $VERSION "$REQUIRE"
}

function js_plugin {
	local SRC_FILE=$1
	local REQUIRE=${2:-'datatables.net'}
	local DEST_DIR=$(dirname $(dirname $SRC_FILE))
	local FILE_NAME=$(basename $SRC_FILE)
	local VERSION=$(dt_version)

	cp $SRC_FILE $DEST_DIR/$FILE_NAME
	js_wrap $DEST_DIR/$FILE_NAME $VERSION "$REQUIRE"
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

for file in $PLUGINS/editorFields/src/*.js; do
	js_plugin $file
done

for FILE_IN in $PLUGINS/editorFields/src/*.scss; do
	BASENAME=$(basename $FILE_IN .scss)
	DIRNAME=$(dirname $FILE_IN)
	FILE_OUT=${DIRNAME}/../${BASENAME}.scss

	cp $FILE_IN $FILE_OUT
	scss_compile $FILE_OUT
	rm ${DIRNAME}/../${BASENAME}.css
done

# for file in $PLUGINS/dataRender/src/*.ts; do
# 	ts_plugin $file
# done

# for FEATURE_DIR in $PLUGINS/features/*; do
# 	NAME=$(basename $FEATURE_DIR)

# 	## Build TS if there is a ts file
# 	ts_plugin $FEATURE_DIR/src/dataTables.$NAME.ts $FEATURE_DIR/dist

# 	if [ -e $FEATURE_DIR/src/types.d.ts ]; then
# 		cp $FEATURE_DIR/src/types.d.ts $FEATURE_DIR/dist
# 	fi

# 	## Build SCSS
# 	if [ -e $FEATURE_DIR/src/dataTables.$NAME.scss ]; then
# 		cp $FEATURE_DIR/src/dataTables.$NAME.scss $FEATURE_DIR/dist
# 		scss_compile $FEATURE_DIR/dist/dataTables.$NAME.scss
# 		rm $FEATURE_DIR/dist/dataTables.$NAME.scss
# 	fi

# 	## Build examples
# 	if [ -d $FEATURE_DIR/dist/examples ]; then
# 		rm -r $FEATURE_DIR/dist/examples
# 	fi

# 	# Build happens in the path that is http available, despite it just being a symlink
# 	cp -r $FEATURE_DIR/examples $FEATURE_DIR/dist/examples
# 	examples_process $DT_BUILT/extensions/Plugins/features/$NAME/dist
# done

# for file in $PLUGINS/sorting/src/*.ts; do
# 	ts_plugin $file
# done

# for file in $PLUGINS/type-detection/src/*.ts; do
# 	ts_plugin $file
# done

# echo_section "  Languages"
# for file in $PLUGINS/i18n/*.json; do
# 	lang_plugin $file
# done

