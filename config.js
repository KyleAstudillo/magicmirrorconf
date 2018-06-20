/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
                        module: "MMM-Wallpaper",
                        position: "fullscreen_below",
                        config: { // See "Configuration options" for more information.
                                source: "/r/EarthPorn",
                                slideInterval: 60 * 1000 // Change slides every minute
                        }
                },
		{
		module: "MMM-EmbedYoutube", // Path to youtube module from modules folder Exmaple: MagicMirror/modules/custom/MMM-EmbedYoutube/ so it's custom/MMM-EmbedYoutube
		position: "bottom_left",	// This can be any of the regions.
		config: {
			// See 'Configuration options' for more information.
			video_id: "8jGnSosvX3c",
                        autoplay: true,
                        loop: true,
                        modestbranding: true
		        }
	        },
		{
			module: "compliments",
			position: "lower_third"
			config: {
				compliments: {
		anytime: [
			"Hey there sexy!"
		],
		morning: [
			"Good morning, handsome!",
			"Enjoy your day!",
			"How was your sleep?"
		],
		afternoon: [
			"Hello, beauty!",
			"You look sexy!",
			"Looking good today!"
		],
		evening: [
			"Wow, you look hot!",
			"You look nice!",
			"Hi, sexy!"
		]
		}
	}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
