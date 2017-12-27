/**
 * Created by xtao on 2017/12/26.
 */

import karma_ajax from "../src/karma_ajax";
import {sum} from "../src/sample"

describe('karma_ajax ', function() {
	karma_ajax(function(error, results){
		if(error){
			return console.error(error);
		}
		console.log(results);
		console.log("test");
	});
});

describe('sum', function () {
	console.log(sum(1 , 2));
})


