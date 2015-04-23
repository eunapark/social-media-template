(function(){
	
var sns = [
		{
			name: 'Facebook',
			visitors: '900000000',
			rank: 1,
			image: 'facebook.png'
		},
		{
			name: 'Twitter',
			visitors: '310000000',
			rank: 2,
			image: 'twitter.png'
		},
		{
			name: 'Linkedin',
			rank: 3,
			visitors: '255000000',
			image: 'linkedin.png'
		},
		{
			name: 'Pinterest',
			rank: 4,
			visitors: '250000000',
			image: 'pinterest.png'
		},
		{
			name: 'Google Plus',
			rank: 5,
			visitors: '120000000',
			image: 'google.png'

		},
		{
			name: 'Tumblr',
			rank: 6,
			visitors: '110000000',
			image: 'tumblr.png'
		},
		{
			name: 'Instagram',
			rank: 7,
			visitors: '100000000',
			image: 'instagram.png'
		}

	];

	var formatHelpers = {
		addCommas: function(value){
			return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},

		toUpperCase: function(name){
			return name.toUpperCase();
		},

		boldName: function(test){
			return test.bold();
		}

	}


	// Step 1: in the JavaScript, load the html from the template we made in index.html
	var templateHtml = $('#sns-template').html();
	// console.log(templateHtml)
	
	// Step 2: Take our templateHtml and turn it into a template factory
	var templateFactory = _.template(templateHtml);

	// Step 3: Loop through our data and bake out all of our elements
	sns.forEach(function(snsData){
		_.extend(snsData, formatHelpers); 
		//_.extend () merges two keys together 
		// extends through the loop
		
		var all_sns_data = templateFactory(snsData);
		console.log(snsData)
		console.log('-----');
		$('#container').append(all_sns_data);
	});




}).call(this);



