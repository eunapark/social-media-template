(function(){
	
var sns = [
		{
			name: 'Facebook',
			visitors: '900 mil',
			rank: 1,
			image: 'facebook.png'
		},
		{
			name: 'Twitter',
			visitors: '310 mil',
			rank: 2,
			image: 'twitter.png'
		},
		{
			name: 'Linkedin',
			rank: 3,
			visitors: '255 mil',
			image: 'linkedin.png'
		},
		{
			name: 'Pinterest',
			rank: 4,
			visitors: '250 mil',
			image: 'pinterest.png'
		},
		{
			name: 'Google Plus',
			rank: 5,
			visitors: '120 mil',
			image: 'google.png'

		},
		{
			name: 'Tumblr',
			rank: 6,
			visitors: '110 mil',
			image: 'tumblr.png'
		},
		{
			name: 'Instagram',
			rank: 7,
			visitors: '100 mil',
			image: 'instagram.png'
		}

	];


	// Step 1: in the JavaScript, load the html from the template we made in index.html
	var templateHtml = $('#sns-template').html();
	// console.log(templateHtml)
	
	// Step 2: Take our templateHtml and turn it into a template factory
	var templateFactory = _.template(templateHtml);

	// Step 3: Loop through our data and bake out all of our elements
	sns.forEach(function(snsData){
		var all_sns_data = templateFactory(snsData);
		console.log(all_sns_data)
		console.log('-----');
		$('#container').append(all_sns_data);
	});



}).call(this);