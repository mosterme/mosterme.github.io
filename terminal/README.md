# Windows Terminal

[Windows Terminal](https://aka.ms/terminal) is a new, modern, feature rich, productive terminal application for command-line users.

It includes many features like support for tabs, rich text, globalization, configurability, theming & styling, and more.
 
Windows Terminal will automatically create Windows Subsystem for Linux (WSL) and PowerShell profiles for you.

Upon installing the terminal, it will set PowerShell as your default profile.

![Windows Terminal](images/terminal-0.png)

## Git Bash

Friends don't let friends use the git bash shell on windows.


![Git Bash](images/terminal-1.png)

```javascript
	{
		"guid": "{00000000-0000-0000-ba54-000000000001}",
		"name": "Git Bash",
		"commandline": "\"%PROGRAMFILES%\\git\\usr\\bin\\bash.exe\" -i -l",
		"colorScheme": "Solarized Dark",
		"fontFace": "Cascadia Code",
		"icon": "%PROGRAMFILES%\\git\\mingw64\\share\\git\\git-for-windows.ico",
		"startingDirectory": "%USERPROFILE%",
		"suppressApplicationTitle": true,
	},
```

## SSH
Windows 10 has a built-in SSH client that you can use in Windows Terminal.

There is no need for [Cygwin](https://www.cygwin.com/) or [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/) anymore.

![SSH Session](images/terminal-2.png)

```javascript
	{
		"guid": "{00000000-0000-0000-ba54-000000000002}",
		"name": "Raspberry 3",
		"commandline": "ssh pi@raspberry3.localdomain",
		"colorScheme": "One Half Dark",
		"fontFace" : "Consolas",
		"icon": "%USERPROFILE%\\Pictures\\raspberry.png",
		"backgroundImage": "%USERPROFILE%\\Pictures\\plumber.png",
		"backgroundImageStretchMode": "none",
		"backgroundImageAlignment": "bottomRight",
	},
```

## Color schemes

Windows Terminal already includes popular [color schemes](https://aka.ms/terminal-color-schemes)
like [One Half](https://github.com/sonph/onehalf) or [Solarized](https://github.com/altercation/solarized).

Custom color schemes can also be defined in the schemes array of your [settings.json](https://aka.ms/terminal-documentation) file.

For example the beautiful [Nord](https://www.nordtheme.com/) theme would look like this.

```javascript
	{
		"name": "Nord",
		"foreground": "#D8DEE9",
		"background": "#2E3440",
		"black": "#3B4252",
		"red": "#BF616A",
		"green": "#A3BE8C",
		"yellow": "#EBCB8B",
		"blue": "#81A1C1",
		"purple": "#B48EAD",
		"cyan": "#88C0D0",
		"white": "#E5E9F0",
		"brightBlack": "#4C566A",
		"brightRed": "#BF616A",
		"brightGreen": "#A3BE8C",
		"brightYellow": "#EBCB8B",
		"brightBlue": "#81A1C1",
		"brightPurple": "#B48EAD",
		"brightCyan": "#88C0D0",
		"brightWhite": "#E5E9F0"
	},
```

## Keybindings

To learn more about keybindings, visit https://aka.ms/terminal-keybindings

`❖` + `1` | when pinned to taskbar
`Alt` + `Enter` or `F11` | toggle full screen
`Ctrl` + `,` | open the settings
`Ctrl` + `mouse wheel` | zoom with the mouse
`Ctrl` + `0` | restore default text zoom
`Ctrl` + `Tab` | switch to the next tab
`Ctrl` + `Shift` + `Tab` | switch to the previous tab
`Ctrl` + `Shift` + `f` | open the search box
