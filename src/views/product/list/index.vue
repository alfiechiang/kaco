<template>

   <div class="search">
      <el-form ref="queryFormRef" :inline="true">
         <el-form-item prop="code" label="產品名稱">
            <el-input v-model="search.code" placeholder="產品名稱" />
         </el-form-item>

         <el-form-item label="產品類型" prop="region">
            <el-select v-model="search.category" placeholder="產品類型">
               <el-option label="Zone one" value="shanghai" />
               <el-option label="Zone two" value="beijing" />
            </el-select>
         </el-form-item>

         <el-form-item>
            <el-button type="primary" :icon="Search">搜索</el-button>
            <el-button :icon="Refresh">重置</el-button>
         </el-form-item>
      </el-form>
   </div>

   <div class="option">
      <el-button type="success">添加商品</el-button>
      <el-button type="danger">删除商品</el-button>
   </div>

   <el-table ref="dataTableRef" :data="roleList" highlight-current-row border>
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="商品編號" prop="name" width="100" />
      <el-table-column label="商品名稱" prop="code" width="100" />
      <el-table-column label="商品價格" prop="code" width="100" />
      <el-table-column label="商品類目" align="center" width="100" prop="sort" />
      <el-table-column prop="createTime" label="添加时间" width="170" />
      <el-table-column label="商品賣點" align="center" width="100" prop="sort" />
      <el-table-column label="商品描述" align="center" width="100" prop="sort" />
      <el-table-column label="操作" align="left">
         <template #default="scope">
            <el-button type="primary">
               编辑
            </el-button>
            <el-button type="danger">
               删除
            </el-button>
         </template>
      </el-table-column>
   </el-table>


   <div class="pager">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="4"
         :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
         :total="400">
      </el-pagination>
   </div>
</template>
<script setup lang="ts">

//E3E7ED

import { reactive, toRefs } from 'vue'
import { Search, Refresh } from '@element-plus/icons-vue';


const state = reactive({
   roleList: [],
   search: {
      code: "",
      category: ""

   }
})

const {
   roleList,
   search
} = toRefs(state);



const data: any = [
   {
      code: "ADMIN",
      createTime: "2021-03-25 12:39:25",
      id: "2",
      name: "超級管理員",
      sort: 2,
      status: 1,
      updateTime: null
   },
   {
      code: "GUEST",
      createTime: "2021-03-25 12:39:25",
      id: "3",
      name: "訪問遊客",
      sort: 3,
      status: 1,
      updateTime: null
   }

];

roleList.value = data


const handleSizeChange = (val: number) => {
   console.log(`每页 ${val} 条`);

}

const handleCurrentChange = (val: number) => {
   console.log(`当前页: ${val}`);

}




</script>
<style lang="scss">
.pager {
   width: 100%;
   height: 100px;

   padding-top: 20px;

}


.search {
   width: 100%;
   height: 65px;
   border: 1px solid #E3E7ED;
   padding: 15px;
}

.option {
   margin-top: 10px;
   width: 100%;
   height: 50px;

}
</style>

