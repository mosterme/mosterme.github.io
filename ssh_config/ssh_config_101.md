# SSH Config 101

![Keine gute Idee](keine-gute-idee.png)

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

<dl>
  <dt><br/>-t ed25519</dt>
  <dd>Type of the key. Ed25519 is the most recommended public-key algorithm today.</dd>
  <dt><br/>-f ~/.ssh/armin.ed25519</dt>
  <dd>Filename for the keys. Should probably be stored in your default ~/.ssh directory.</dd>
</dl>

&#160;

# ssh-copy-id
```
ssh-copy-id -i ~/.ssh/armin.ed25519.pub prodserver
```

<dl>
  <dt><br/>-i ~/.ssh/armin.ed25519<b>.pub</b></dt>
  <dd>The Identity File to copy to the host. Remember to <b>use the public key</b> !</dd>
  <dt><br/>prodserver</dt>
  <dd>SSH destination [user@]host, in this case configured in the  <i>.ssh/config</i> .</dd>
</dl>
