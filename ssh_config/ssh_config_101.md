# SSH Config 101

```
alias ssh-devserver="ssh user@server-development.example.com"
```

# This is not a good idea!

 There is another, much better, and more straightforward solution to this problem. 
 
 With SSH you can configure different options for each machine you connect to.

# ~/.ssh/config
```
Host prodserver
  Hostname server-production.example.com

Host devserver
  Hostname server-development.example.com
```

# ssh-keygen
```
ssh-keygen -t ed25519 -f ~/.ssh/armin.ed25519
```

# ssh-copy-id
```
ssh-copy-id -i ~/.ssh/armin.ed25519.pub prodserver
```
