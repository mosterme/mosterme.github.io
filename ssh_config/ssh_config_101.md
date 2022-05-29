# SSH Config 101

![Keine gute Idee](keine-gute-idee.png)

&#160;

```
alias ssh-devserver="ssh user@server-development.example.com"
```

# This is not a good idea!

 There is another, much better, and more straightforward solution to this problem. 
 
 With SSH you can configure different options for each machine you connect to.

&#160;

# ~/.ssh/config
```
Host prodserver
  Hostname server-production.example.com

Host devserver
  Hostname server-development.example.com
```

&#160;

# ~/.ssh/config (continued)
```
Host server-prod
  Hostname new-production-server.example.com
  IdentityFile ~/.ssh/armin.ed25519
  User armin

Host server-qa server-staging server-test
  Hostname new-test-server.example.com
  IdentityFile ~/.ssh/armin.ed25519
  User armin

Host server-development
  Hostname new-development-server.example.com
  IdentityFile ~/.ssh/armin.ed25519
  User armin
```

&#160;

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
ssh-copy-id -i ~/.ssh/armin.ed25519.pub server-prod
```

<dl>
  <dt><br/>-i ~/.ssh/armin.ed25519<b>.pub</b></dt>
  <dd>The Identity File to copy to the host. Remember to <b>use the public key</b> !</dd>
  <dt><br/>server-prod</dt>
  <dd>SSH destination [user@]host, in this case configured in the  <i>.ssh/config</i> .</dd>
</dl>

&#160;

# Benefits
* aliases for hostnames (even multiple)
* additional parameters are still possible
* directly assign username for the host
* exchanged keys enable more features
  + passwordless authentication
  + remote tab-completion
* the config is used for _everything_ ssh
  + ssh-copy-id
  + scp
  + git

&#160;

# Links

* Linuxize.com - [Using the SSH Config File](https://linuxize.com/post/using-the-ssh-config-file/)
* Medium.com - [Upgrade Your SSH Key to Ed25519](https://medium.com/risan/upgrade-your-ssh-key-to-ed25519-c6e8d60d3c54)
* Wikipedia - [Edwards-curve Digital Signature Algorithm](https://en.wikipedia.org/wiki/EdDSA)
* YouTube - GPN20 - Leyrer : [Besser leben mit SSH](https://youtu.be/qvdlLTyUJ5I)
