# 工程实践题目：设计一个抽奖系统

---

## 1.课题内容
### 基础内容  
- 实现一个简单的用户管理系统。
- 实现一个抽奖接口，客户可以在这个抽奖系统进行抽奖。
- 实现一个发布抽奖活动接口，管理员能够发布抽奖活动。
- 实现一个中奖榜单接口，展示过去一个小时的中奖用户。 

### 进阶内容
- 支持高并发。
- 异步发奖。
- 奖品超发，异常情况的考虑。
- 支持在活动中动态调整奖品的数量和中奖概率用户。

## 2. 系统需求分析
### 用户角色划分图

<!-- ![用户角色划分图](graph/用户角色划分图.svg) -->

<div align=center>
<img src="graph/用户角色划分图.svg" width="300" height="300">
</div>

### 用户管理功能用例图

<div align=center>
<img src="graph/用户管理功能用例图.svg" width="300" height="300">
</div>


### 抽奖管理用例图

<div align=center>
<img src="graph/抽奖管理用例图.svg" width="300" height="300">
</div>


### 抽奖功能用例图

<div align=center>
<img src="graph/抽奖功能用例图.svg" width="300" height="300">
</div>

