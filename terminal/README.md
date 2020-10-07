# Windows Terminal

[Windows Terminal](https://aka.ms/terminal) is a new, modern, feature rich, productive terminal application for command-line users.

It includes many features like support for tabs, rich text, globalization, configurability, theming & styling, and more.
 
Windows Terminal will automatically create Windows Subsystem for Linux (WSL) and PowerShell profiles for you.

Upon installing the terminal, it will set PowerShell as your default profile.

![Windows Terminal](images/terminal-0.png)

## Git Bash

Friends don't let friends use the git bash shell on windows. No judgement.


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

You can enter the ssh invocation directly into the "commandline" parameter.

There is no need for [Cygwin](https://www.cygwin.com/) or [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/) anymore.

See [Tutorial: SSH in Windows Terminal](https://docs.microsoft.com/en-us/windows/terminal/tutorials/ssh) for more details.

![SSH Session](images/terminal-2.png)

```javascript
	{
		"guid": "{00000000-0000-0000-ba54-000000000002}",
		"name": "Raspberry 3",
		"commandline": "ssh pi@raspberry3.localdomain",
		"colorScheme": "Raspberry",
		"fontFace" : "Consolas",
		"icon": "%USERPROFILE%\\Pictures\\Terminal\\raspberry-fav.png",
		"backgroundImage": "%USERPROFILE%\\Pictures\\Terminal\\raspberry.png",
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
		"brightRed": "#E74856",
		"brightGreen": "#16C60C",
		"brightYellow": "#F9F1A5",
		"brightBlue": "#3B78FF",
		"brightPurple": "#B4009E",
		"brightCyan": "#61D6D6",
		"brightWhite": "#F2F2F2"
	},
```

## Keybindings

`❖` + `1` | when pinned to taskbar
`Alt` + `Enter` or `F11` | toggle full screen
`Ctrl` + `,` | open the settings
`Ctrl` + `mouse wheel` | zoom with the mouse
`Ctrl` + `=` or `Ctrl` + `-` | zoom with the keyboard
`Ctrl` + `0` | restore the default text zoom
`Ctrl` + `c` | copy the selection
`Ctrl` + `v` | paste the clipboard
`Ctrl` + `Tab` | switch to the next tab
`Ctrl` + `Shift` + `Tab` | switch to the previous tab
`Ctrl` + `Shift` + `f` | open the search box

## Links

### YouTube
* [The new Windows Terminal](https://youtu.be/8gw0rXPMMPE)
* [Windows Terminal: Building a better command line experience for developers](https://youtu.be/KMudkRcwjCw).
* [Windows Terminal: The secret to command line happiness!](https://youtu.be/2dsnwlnNBzs)

### Microsoft | Docs
* Learn more about [Windows Terminal](https://aka.ms/terminal-documentation).
* Learn more about [global settings](https://aka.ms/terminal-global-settings).
* Learn more about [profiles](https://aka.ms/terminal-profile-settings).
* Learn more about [color schemes](https://aka.ms/terminal-color-schemes).
* Learn more about [keybindings](https://aka.ms/terminal-keybindings).
* Learn more about [selections](https://aka.ms/terminal-selection).
* Learn more about [panes](https://aka.ms/terminal-panes).

### GitHub
* [Windows Terminal](https://github.com/microsoft/terminal)
* [Cascadia Code](https://github.com/microsoft/cascadia-code)
