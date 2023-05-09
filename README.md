# EpyTODO
### An ASM Studios production

=======

## Description
EpyTODO project aim to the creation of an API interacting with a database.

Here is the recommended repository's structure used for this project (without bonuses) :

![Repository's Structure](./assets/structure.png)

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
### REPORTING BUGS:
> There is no bug

---
# THE TEAM:

| [<img src="https://github.com/Mael-RABOT.png?size=85" width=85><br><sub>Maël RABOT</sub>](https://github.com/Mael-RABOT) | [<img src="https://github.com/Cadavre-chan.png?size=85" width=85><br><sub>Axel CHYPRE</sub>](https://github.com/Cadavre-chan) | [<img src="https://github.com/Popochounet.png?size=85" width=85><br><sub>Adrien AUDRIAD</sub>](https://github.com/Popochounet) |
|:---:|:---:|:--------------------------------------------------------------------------------------------------------------------------:|

<br/><br/>
<img src="https://newsroom.ionis-group.com/wp-content/uploads/2021/10/EPITECH-TECHNOLOGY-QUADRI-2021.png" alt="Epitech Technology Logo" title="Epitech Technology Logo" width=300 height=100>

