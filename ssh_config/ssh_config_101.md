# SSH Config 101

```
alias ssh-devserver="ssh user@server-dev.example.com"
```

# This is not a good idea!

 There is another, much better, and more straightforward solution to this problem. 
 
 With SSH you can configure different options for each machine you connect to.

# ~/.ssh/config
```
Host prodserver
  Hostname server-prod.example.com

Host devserver
  Hostname server-dev.example.com
```
