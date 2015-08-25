jQueryUI Starter project with requirejs for AMD
===============================================
Setup


0. Build tool - Gulp
0. Directory layout
+ src (source files - html)
	+ css (css sources)
	+ scripts (scripts directory)
		+ app (application scripts)
			+ app.js (application script)
				
To setup this project first install bower and gulp on nodejs.

Bower dependencies for this project are requirejs, jquery and jquery-ui.

Install Bower dependencies by running the command
>bower install requirejs jquery-ui jquery

Install gulp plugin's with the command
>npm install 

Now you are ready to deploy your first amd app with jqueryui.
run the command:
>gulp

Deployment structure that will be generated:
+ build (final files - html)
	+ css (css sources)
		+ thirdparty (css of thirdparty libraries)
			+ jquery-ui.css (CSS of jquery, uses sommothness jquery theme)
			+ images (images required for thirdparties)
				+ multiple gif and png files. 
	+ scripts (scripts directory)
		+ app (application scripts)
			+ app.js (application script)
		+ thirdparty (scripts required for thirdparty)
			+ jquery.js 
			+ jquery-ui.js
			+ require.js
			
Point to this build directory in your webserver or change file gulpfile.js to point to your virtual directory.