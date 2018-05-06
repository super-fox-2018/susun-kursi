// bila ada 10 orang, ['a','b','c','d','e','f','g','h','i','j'].
// orang-orang tsb akan diatur tempat duduk nya berdasarkan urutannya secara vertikal,
// dan jumlah maksimal kursi per baris vertikal adalah 3.
// tampilkan siapa saja yg berada di baris 1, 2, dan 3 nya.

// hasil yg benar :
// Baris 0 :  [ 'a', 'd', 'g', 'j' ]
// Baris 1 :  [ 'b', 'e', 'h' ]
// Baris 2 :  [ 'c', 'f', 'i' ]

'use strict'

function generateSeats(row) {
	var rows =[];
	for(var z = 0; z < row; z++ ){
		rows.push([])
	}
	return rows;
}

function managePerson(arr, rowSeats) {
	var sittingPlace = generateSeats(rowSeats);
	for(let z = 0; z < sittingPlace.length; z ++){
		let studentRow = z;
		for(let k = 0; k < arr.length; k++){
			if(studentRow === k){
				sittingPlace[z].push(arr[k]);
				studentRow += rowSeats;
			}
		}
	}
	return printSeats(sittingPlace);

}

function printSeats(seats) {
	for(let z = 0; z < seats.length; z++ ){
		console.log(seats[z])
	}

}

;
managePerson(['a','b','c','d','e','f','g','h','i','j'], 3);