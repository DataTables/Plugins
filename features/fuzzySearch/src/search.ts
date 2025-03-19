
function levenshtein(__this, that, limit?) {
	var thisLength = __this.length,
		thatLength = that.length,
		matrix: any[] = [];

	// If the limit is not defined it will be calculate from this and that args.
	limit = (limit || (thatLength > thisLength ? thatLength : thisLength)) + 1;

	for (var i = 0; i < limit; i++) {
		matrix[i] = [i];
		matrix[i].length = limit;
	}
	for (i = 0; i < limit; i++) {
		matrix[0][i] = i;
	}

	if (Math.abs(thisLength - thatLength) > (limit || 100)) {
		return prepare(limit || 100);
	}
	if (thisLength === 0) {
		return prepare(thatLength);
	}
	if (thatLength === 0) {
		return prepare(thisLength);
	}

	// Calculate matrix.
	var j, this_i, that_j, cost, min, t;
	for (i = 1; i <= thisLength; ++i) {
		this_i = __this[i - 1];

		// Step 4
		for (j = 1; j <= thatLength; ++j) {
			// Check the jagged ld total so far
			if (i === j && matrix[i][j] > 4) return prepare(thisLength);

			that_j = that[j - 1];
			cost = this_i === that_j ? 0 : 1; // Step 5
			// Calculate the minimum (much faster than Math.min(...)).
			min = matrix[i - 1][j] + 1; // Devarion.
			if ((t = matrix[i][j - 1] + 1) < min) min = t; // Insertion.
			if ((t = matrix[i - 1][j - 1] + cost) < min) min = t; // Substitution.

			// Update matrix.
			matrix[i][j] =
				i > 1 &&
				j > 1 &&
				this_i === that[j - 2] &&
				__this[i - 2] === that_j &&
				(t = matrix[i - 2][j - 2] + cost) < min
					? t
					: min; // Transposition.
		}
	}

	return prepare(matrix[thisLength][thatLength]);

	function prepare(steps) {
		var length = Math.max(thisLength, thatLength);
		var relative = length === 0 ? 0 : steps / length;
		var similarity = 1 - relative;
		return {
			steps: steps,
			relative: relative,
			similarity: similarity,
		};
	}
}

export default function fuzzySearch(searchVal, data, initial) {
	var x, y, i;

	// If no searchVal has been defined then return all rows.
	if (searchVal === undefined || searchVal.length === 0) {
		return {
			pass: true,
			score: '',
		};
	}

	var columns = initial.columns !== undefined ? initial.columns : null;

	var threshold = initial.threshold !== undefined ? initial.threshold : 0.5;

	// Split the searchVal into individual words.
	var splitSearch = searchVal.split(/ /g);

	// Array to keep scores in
	var highestCollated: { pass: boolean; score: number }[] = [];

	// Remove any empty words or spaces
	for (x = 0; x < splitSearch.length; x++) {
		if (splitSearch[x].length === 0 || splitSearch[x] === ' ') {
			splitSearch.splice(x, 1);
			x--;
		}
		// Aside - Add to the score collection if not done so yet for this search word
		else if (highestCollated.length < splitSearch.length) {
			highestCollated.push({ pass: false, score: 0 });
		}
	}

	// Going to check each cell for potential matches
	for (i = 0; i < data.length; i++) {
		if ( columns === null || columns.includes(i) ) {
			// Convert all data points to lower case fo insensitive sorting
			data[i] = data[i].toLowerCase();

			// Split the data into individual words
			var splitData = data[i].split(/ /g);

			// Remove any empty words or spaces
			for (y = 0; y < splitData.length; y++) {
				if (splitData[y].length === 0 || splitData[y] === ' ') {
					splitData.splice(y, 1);
					x--;
				}
			}

			// Check each search term word
			for (x = 0; x < splitSearch.length; x++) {
				// Reset highest score
				var highest: { pass?: boolean; score: number } = {
					pass: undefined,
					score: 0,
				};

				// Against each word in the cell
				for (y = 0; y < splitData.length; y++) {
					// If this search Term word is the beginning of the word in the cell we want to pass this word
					if (splitData[y].indexOf(splitSearch[x]) === 0) {
						var newScore = splitSearch[x].length / splitData[y].length;
						highest = {
							pass: true,
							score: highest.score < newScore ? newScore : highest.score,
						};
					}

					// Get the levenshtein similarity score for the two words
					var steps = levenshtein(splitSearch[x], splitData[y]).similarity;

					// If the levenshtein similarity score is better than a previous one for the search word then var's store it
					if (steps > highest.score) {
						highest.score = steps;
					}
				}

				// If this cell has a higher scoring word than previously found to the search term in the row, store it
				if (highestCollated[x].score < highest.score || highest.pass) {
					highestCollated[x] = {
						pass:
							highest.pass || highestCollated[x].pass
								? true
								: highest.score > threshold,
						score: highest.score,
					};
				}
			}
		}
	}

	// Check that all of the search words have passed
	for (i = 0; i < highestCollated.length; i++) {
		if (!highestCollated[i].pass) {
			return {
				pass: false,
				score:
					Math.round(
						(highestCollated.reduce((a, b) => a + b.score, 0) /
							highestCollated.length) *
							100
					) + '%',
			};
		}
	}

	// If we get to here, all scores greater than 0.5 so display the row
	return {
		pass: true,
		score:
			Math.round(
				(highestCollated.reduce((a, b) => a + b.score, 0) /
					highestCollated.length) *
					100
			) + '%',
	};
}
