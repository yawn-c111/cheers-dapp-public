# 📣cheers dApp

![1500x500](https://user-images.githubusercontent.com/69970183/200176233-b6bf8860-7567-489b-a5cc-7ca23a4a7d36.jpg)


## summary
cheers-dAppの目的は「DAOで立ち上がるプロジェクトに対して、個人が応援しやすい環境を整備することで、DAO参加者がより積極的にチャレンジできる世界を作ること」にあります。
DAOでは多くのプロジェクトが自発的に立案されますが、立案したプロジェクトがDAOで認可されなかった場合、プロジェクト立案者が自分で考えたプロジェクトに挑戦できないことが多いです。
そこで、DAOで立ち上がるプロジェクトに賛同する個人が、自らの意志で応援できるエコシステムを構築することで、DAOとプロジェクトを立ち上げたい個人が共に歩んでいける世界を実現できるのはないかと考えました。
cheers-dAppは、DAOに特化した分散型クラウドファンディングと考えるとイメージしやすいです。
挑戦者が自ら考えたプロジェクトを公開し、その内容に対して応援者が応援メッセージや独自トークンCHERによる経済的支援などを送ることができるシステムとなっています。
また、支援金額や早期支援といった様々な評価軸から、支援の内容によってDAOと応援者にそれぞれリターンが戻ってくる仕組みとなっています。

![cheers-dapp](https://user-images.githubusercontent.com/69970183/200175719-9ba1648f-fcc7-41b8-bda6-ef5ce29c10b1.png)

## tech stacks
### client
```
- Next.js
- TypeScript
- tailwindCSS
```
### contract
```
- Solidity
- Hardhat
- ethers.js
- TypeChain
```
## blockchain
```
Polygon Mumbai Testnet
```
## deployed contract
cher deployed to: 0xc87D7FE5E5Af9cfEDE29F8d362EEb1a788c539cf
https://mumbai.polygonscan.com/address/0xc87D7FE5E5Af9cfEDE29F8d362EEb1a788c539cf#code

CherFaucet deployed to: 0x049Af7DE8b1a25658BBD6a0F6f8aE23632975b50
https://mumbai.polygonscan.com/address/0x049Af7DE8b1a25658BBD6a0F6f8aE23632975b50#code

CheerListData deployed to: 0xcE9aDb57464657D74d8A8260b29B29bD07e2c3eb
https://mumbai.polygonscan.com/address/0xcE9aDb57464657D74d8A8260b29B29bD07e2c3eb

UsersData deployed to: 0x3B71d3662eF1D13B63a337adA7Fd86C2cDE541a9
https://mumbai.polygonscan.com/address/0x3B71d3662eF1D13B63a337adA7Fd86C2cDE541a9

DaosData deployed to: 0xa1c94AE2029Ef112386707A9DbD5501FCAfD37c4
https://mumbai.polygonscan.com/address/0xa1c94AE2029Ef112386707A9DbD5501FCAfD37c4

ProjectsData deployed to: 0xD511eDC5b6F9f6fcd1135cd9F55857fB7cf606A8
https://mumbai.polygonscan.com/address/0xD511eDC5b6F9f6fcd1135cd9F55857fB7cf606A8

PoolListData deployed to: 0xf244F1d6A605797721f2d000107a4d129996adFa
https://mumbai.polygonscan.com/address/0xf244F1d6A605797721f2d000107a4d129996adFa

UserPoolFactory deployed to: 0xb51343d7772054c22e46023ed3BEd66Bb8439B5D
https://mumbai.polygonscan.com/address/0xb51343d7772054c22e46023ed3BEd66Bb8439B5D

DaoPoolFactory deployed to: 0x802422C3cc18ED1f765bb6932Ec9A45cc6A1Fa6E
https://mumbai.polygonscan.com/address/0x802422C3cc18ED1f765bb6932Ec9A45cc6A1Fa6E

Cheers deployed to: 0x4711313De918B66661fC826497e228526Cbc1067
https://mumbai.polygonscan.com/address/0x4711313De918B66661fC826497e228526Cbc1067


## 審査やテストのためにプロジェクトにアクセスする方法など
[https://cheers-dapp-o9cc2wfo5-junya-thinkactive.vercel.app/](https://cheers-dapp-o9cc2wfo5-junya-thinkactive.vercel.app/)


![capture1](https://user-images.githubusercontent.com/69970183/200176536-fa020b4d-e207-400e-a703-27a3e6fa831b.JPG)

![capture2](https://user-images.githubusercontent.com/69970183/200176653-d2d8e7ca-80c0-493b-a8f9-63357731639a.JPG)

![capture3](https://user-images.githubusercontent.com/69970183/200177226-9f8ca441-3cbb-4183-a1dc-878f7f6af086.JPG)

![capture4](https://user-images.githubusercontent.com/69970183/200177410-57d6f470-c1d8-4692-b67c-87587573333e.JPG)



---
## development environment
```bash
$ yarn install
```
## packages
### contract
```bash
// 追加
$ yarn contract add {PACKAGE_NAME}
// 削除
$ yarn contract remove {PACKAGE_NAME}
// 更新
$ yarn contract update {PACKAGE_NAME}
```
### client
```bash
// 追加
$ yarn client add {PACKAGE_NAME}
// 削除
$ yarn client remove {PACKAGE_NAME}
// 更新
$ yarn client update {PACKAGE_NAME}
```
## scripts
### contract
#### hardhat compile
hardhat.config.ts -> paths -> artifactsに設定しているclient側にコンパイルされる
```bash
$ yarn contract compile
```
#### typechain
package.json -> codegen-typesに設定しているcontract & clientに型生成
```bash
$ yarn contract codegen-types
```
### client
#### dev
開発モードで実行 localhost:8080
```bash
$ yarn client dev
```
