## Part 4: Quiz time!

Copy the questions below into a file `part-4/quiz.md`. Then, write your answer to each question directly below it.

The quiz is worth __50 points__ in total.

_Reminder: you can use the internet to help you answer these questions :)_

- When you run a command in the terminal, where does BASH look for that command?

  * Bash looks for the command in the /bin directory ---
```bash
/
ls
bin
ls
```

- On a UNIX computer, how do you stop a running process?

  * `control + c`

- What packages do you have installed via homebrew?

  ```bash
brew list
dash            openssl         readline
git             openssl@1.1     tree
hub             postgresql      wget
```

- On a UNIX computer, how do you find the process id of a running process?

  * The easiest way to find out if process is running is run `ps aux` command and grep process name. If you got output along with process name/pid, your process is running.
  * or use the command `ps`

- In a terminal, what does control-c do?

  * Interrupt/Kill whatever you are running

- What would be the result of typing the following commands?
```sh
$ cd /Users/steve
$ mkdir foo
$ touch bar
$ cd foo
$ touch bar
$ pwd
```

  * The result would be `cd: no such file or directory: /Users/steve`
  * However if I change it to `$ cd /Users/latoyawilliams` the following happens --
  1. The directory changes to `latoyawilliams`
  2. We make a new directory (file) within `latoyawilliams` called `foo`
  3. We create a new file within the same directory called `bar`
  4. We change directories to `foo`
  5. We create a new file called `bar` within the `foo` directory
  6. We print our working directory and see -- `/users/latoyawilliams/foo`

- How do you set an environment variable in your shell?

  * We can set environmental variables in a single step like this: `export NEW_VAR="Testing export"`

- What keyboard shortcut do you use to split the screen in your editor?

  * Open the command palette with cmd + shift + p (OSX) or ctrl + shift + p (Linux/Windows) and type "split". You'll see options for Up, Down, Left, and Right split.

- How do you create an alias in your shell?

  1. Open your .bashrc -- `$ vim ~/.bashrc`
  2. Go to the end of the file -- In vim, you can accomplish this just by hitting “G” (please note that it is capital).
  3. Add to the alias -- `alias aliasname='commands'`
  4. Write and close the file -- `:wq`
  5. Install the .bashrc -- `$ source ~/.bashrc`

- When a terminal command completes, how can you tell if it was successful or not?

  * `echo $?` -- any number other than 0 is unsuccessful

- What does your `~/.gitconfig` have in it? (paste the whole file here)

  * `ls -a` -- home directory to see that the .gitconfig file is there
  * `atom . .gitconfig` -- opens file in editor
  * `This is Git's per-user configuration file.
[user]
Please adapt and uncomment the following lines:
name = LaToya Williams
email = platinumtoii@yahoo.com
[core]
	excludesfile = /Users/latoyawilliams/.gitignore_global`

- What is the difference between a relative and absolute path?

  * A relative path is a way to specify the location of a directory relative to another directory.
  * An absolute or full path points to the same location in a file system, regardless of the current working directory. To do that, it must include the root directory. By contrast, a relative path starts from some given working directory, avoiding the need to provide the full absolute path.

- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```

  And you were in the `linkedin-for-dancers` folder. What command would you use to copy the `README.md` file to the `pinterest-for-dogs` folder?

 * ```bash
cp linkedin-for-dancers/README.md pinterest-for-dogs
 ```

- What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?

  * command + o

- What files or folders do you want all git repositories to ignore?

  * .gitignore tells git which files (or patterns) it should ignore. It's usually used to avoid committing transient files from your working directory that aren't useful to other collaborators, such as compilation products, temporary files IDEs create, etc.
    * i.e. .DS_Store and node_modules folder

- What is the main difference between `Array.map` and `Array.forEach` in JavaScript?

  * Both the `forEach()` and `map()` method calls a provided function once for each element in an array, in order. Neither method executes the function for array elements without values. However, the `map()` method creates a new array with the results of calling a function for every array element and does not change the original array.
