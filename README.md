# EpyTODO
### An ASM Studios production

---

## Description
EpyTODO project aim to the creation of an API interacting with a database.

Here is the recommended repository's structure used for this project (without bonuses) :

![Repository's Structure](./assets/structure.png)

This project include the following routes:

![Routes](./assets/routes.png)

## Install and Run the project
### Requirements
> - [NodeJS](https://nodejs.org/en/download/package-manager/)
> - [MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/) or [MariaDB](https://www.mariadbtutorial.com/getting-started/install-mariadb/)
> - [PhpMyAdmin](https://docs.phpmyadmin.net/en/latest/setup.html) (optional, if you want to view your database)

---

To use the EpyTodo, you need to install the dependencies and launch it locally on your PC.

*Clone the project:*
```
git clone git@github.com:ASM-Studios/ASM-EpyTODO.git

cd EpyTODO
```

*Install all dependencies:*
```
npm install
```

*Create the database:*
```
cat epytodo.sql | mysql -u root -p
```

*Setup the .env*<br/>
```
cp utils/.env.example .env
```
> Update the .env file with your information

*Run the project:*
```
npm start
```

Enjoy !

---

## Utils
> Inside the utils/ folder you will find
> - '.env.example' An example of the .env file
> - 'epytodoReset.sql' An sql script to reset the database

---

## Front-End

You will find a front end for this project on the repository [ASM-EpyTODO-Front](https://github.com/ASM-Studios/ASM-EpyTODO-Front)

---

## Tests

You can either use cli/postman or the front end to try and use this api

A postman collection is already accessible [here](https://www.postman.com/maelrabot/workspace/asm-epytodo/collection/6418370-49d3603a-44ba-4a47-a3ba-09827b2df02e?action=share&creator=6418370) or you can fork it with:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/6418370-49d3603a-44ba-4a47-a3ba-09827b2df02e?action=collection%2Ffork&collection-url=entityId%3D6418370-49d3603a-44ba-4a47-a3ba-09827b2df02e%26entityType%3Dcollection%26workspaceId%3D2e7f2dfb-33c0-407b-99f9-507710ad6557)

---
### REPORTING BUGS:
> There is no bug

---
# THE TEAM:

| [<img src="https://github.com/Mael-RABOT.png?size=85" width=85><br><sub>Maël RABOT</sub>](https://github.com/Mael-RABOT) | [<img src="https://github.com/Cadavre-chan.png?size=85" width=85><br><sub>Axel CHYPRE</sub>](https://github.com/Cadavre-chan) | [<img src="https://github.com/Popochounet.png?size=85" width=85><br><sub>Adrien AUDRIAD</sub>](https://github.com/Popochounet) |
|:---:|:---:|:--------------------------------------------------------------------------------------------------------------------------:|

<br/><br/>
<img src="https://newsroom.ionis-group.com/wp-content/uploads/2021/10/EPITECH-TECHNOLOGY-QUADRI-2021.png" alt="Epitech Technology Logo" title="Epitech Technology Logo" width=300 height=100>

