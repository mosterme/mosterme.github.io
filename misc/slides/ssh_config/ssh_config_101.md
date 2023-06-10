# SSH Config 101

![Keine gute Idee](keine-gute-idee.png)

<div class="page"/>

# This is not a good idea!

```
alias ssh-test="ssh test-server.example.com"
```

 There is another, much better, and more straightforward solution to this problem. 
 
 With SSH you can configure different options for each machine you connect to.

&#160;

# ~/.ssh/config
```
Host test
  Hostname test-server.example.com

Host prod
  Hostname prod-server.example.com
```

&#160;

```
$ ssh test
```

&#160;
<div class="page"/>

# ~/.ssh/config (continued)
```
Host dev test
  Hostname test-server.example.com
  IdentityFile ~/.ssh/admin_ed25519
  User admin

Host preview stage qa
  Hostname stage-server.example.com
  IdentityFile ~/.ssh/admin_ed25519
  User admin

Host prod production
  Hostname prod-server.example.com
  IdentityFile ~/.ssh/admin_ed25519
  User admin
```

&#160;
<div class="page"/>

# ssh-keygen
```
ssh-keygen -t ed25519 -f ~/.ssh/admin_ed25519
```

<dl>
  <dt><br/>-t ed25519</dt>
  <dd>Type of the key. Ed25519 is the most recommended public-key algorithm today.</dd>
  <dt><br/>-f ~/.ssh/admin_ed25519</dt>
  <dd>Filename for the keys. Should probably be stored in your default ~/.ssh directory.</dd>
</dl>

&#160;

# ssh-copy-id
```
ssh-copy-id -i ~/.ssh/admin_ed25519.pub prod
```

<dl>
  <dt><br/>-i ~/.ssh/admin_ed25519<b>.pub</b></dt>
  <dd>The Identity File to copy to the host. Remember to <b>use the public key</b> !</dd>
  <dt><br/>prod</dt>
  <dd>SSH destination [user@]host, in this case configured in the  <i>.ssh/config</i> .</dd>
</dl>

&#160;
<div class="page"/>

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
