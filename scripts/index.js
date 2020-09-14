/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

console.log("JavaScript is amazing!");

window.addEventListener('load', function() {
	new Masonry('#masonry', {
		itemSelector: '#masonry > *',
    columnWidth: '.w-third-l'
	});
});