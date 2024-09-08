---
title: Conda 配置
icon: pen-to-square
date: 2024-1-1

pageInfo: false
contributors: false
editLink: false
prev: false
next: false
footer: false
---

[安装与使用](https://zhuanlan.zhihu.com/p/440548295)

## 安装：

### 下载：

[官网](https://repo.anaconda.com/archive/)
[清华镜像](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/)

```bash
wget https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/Anaconda3-2021.11-Linux-x86_64.sh
```

### 安装：

```bash
bash Anaconda3-2021.11-Linux-x86_64.sh
```
### 确认安装成功:

命令行前方出现（base）字样。

> 安装完成之后 `source ~/.bashrc` 或者重启终端，anaconda才能生效。

### Miniconda:

```bash
wget https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh
```

## 使用：

### 查看：

```bash
conda info -e
conda env list
```

### 创建：

```bash
conda create -n [环境名称] python= [版本号]
```

### 激活：

```bash
conda acitvate [环境名称]
```

### 退出：

```bash
conda deactivate
```

### 清理：

```bash
conda clean --all
```

### 删除：

```bash
conda remove -n [环境名称] --all
```

### 复制：

```bash
conda create -n test1 --clone test2
```
