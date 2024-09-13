---
title: ssh远程传输
date: 2024-9-7
icon: pen-to-square

pageInfo: false
contributors: false
editLink: false
prev: false
next: false
footer: false
---

## 登录：

```bash
ssh -i ~/.ssh/cloud_key 用户名@内网IP
```

## 传输文件（夹）：

### scp

```bash
scp -i ~/.ssh/cloud_key file.txt 用户名@内网IP
scp -i ~/.ssh/cloud_key -r filedir 用户名@内网IP
```

### sftp

登录：
```bash
sftp -i ~/.ssh/cloud_key 用户名@内网IP
```
登陆后：
```bash
put -r dir1 dir2
get -r dir1 dir2
ls
```

[更多](https://blog.csdn.net/qq_29291085/article/details/87797620)