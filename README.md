It's a starter template for a web-developer.  I'll try to do all the best for improve it :3

## Installation 🛠
Don't forget to change **username** and **your_repo** to your own.
*You have to clean default .git folder to clean all commits from this repo.*
```Bash
git clone https://github.com/Darrgaeon/starter_template_gulp.git
cd starter_template_gulp
npm install
```

### What do that crap do? 👀
By default minimization is disabled to reduce CPU usage 🔥 in development mode, but when we're trying
to push our updates to git it will run `npm run build`, generate the commit message
and if all is OK - it will push the updates.

All files will be minified and dist folder will be cleaned up.

## Running the project 🚀
Just type this command to start developing.
```Bash
npm run start
```

### Deployment 📦
If your template is ready to deploy you have to run build command. It will minimize all the files and
clean up the dist folder.

```Bash
npm run build
```

**In case that you have setup git hooks - don't need to run this command. Just do the push.** 

# Thank you! 😉
