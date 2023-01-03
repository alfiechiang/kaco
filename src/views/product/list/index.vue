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
   </div>

   <el-table ref="dataTableRef" :data="productList" highlight-current-row border>
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="商品編號" prop="product_id" width="100" />
      <el-table-column label="商品名稱" prop="name" width="100" />
      <el-table-column label="商品價格" prop="price" width="100" />
      <el-table-column label="商品類目" align="center" width="100" prop="category" />
      <el-table-column label="添加时间" width="170" prop="createtime"/>
      <el-table-column label="商品賣點" align="center" width="100" prop="product_hot" />
      <el-table-column label="商品描述" align="center" width="100" prop="description" />
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
   productList: [],
   search: {
      code: "",
      category: ""

   }
})

const {
   productList,
   search
} = toRefs(state);


const data: any = [
   {
      product_id: 1,
      name: "香菇",
      price: 20,
      category: "蔬菜",
      createtime: "2022 12-31 23:59:59",
      product_hot: "天然香菇",
      description: "xxxxxxxxx"
   },
   {
      product_id: 2,
      name: "香菜",
      price: 30,
      category: "蔬菜",
      createtime: "2022 12-31 23:59:59",
      product_hot: "天然香菜",
      description: "xxxxxxxxx"
   }

];

productList.value = data


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
   padding-left: 20px;
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

