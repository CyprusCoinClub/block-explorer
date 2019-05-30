# Blockchain-Explorer
Block explorer for CyprusCoin CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon CyprusCoind. It should be accessible from the Internet. Run CyprusCoind with open port as follows:
```bash
./CyprusCoind --enable-cors=* --enable-blockexplorer --rpc-bind-ip=0.0.0.0
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.

