<template>

   <div class="search">
      <el-form ref="queryFormRef" :inline="true">
         <el-form-item prop="name" label="產品名稱">
            <el-input v-model="produtQuery.name" placeholder="產品名稱" />
         </el-form-item>

         <el-form-item label="產品類型" prop="region">
            <el-select v-model="produtQuery.category" placeholder="產品類型">
               <el-option v-for="item in category" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
         </el-form-item>
         <el-form-item>
            <el-button type="primary" :icon="Search" @click="serachData">搜索</el-button>
            <el-button :icon="Refresh">重置</el-button>
         </el-form-item>
      </el-form>
   </div>

   <div class="option">
      <el-button type="success" @click="dialogFormVisible = true">添加商品</el-button>
   </div>

   <el-table ref="dataTableRef" :data="productList" highlight-current-row border>
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="商品編號" prop="ID" width="100" />
      <el-table-column label="商品名稱" prop="name" width="100" />
      <el-table-column label="商品價格" prop="price" width="100" />
      <el-table-column label="商品類目" align="center" width="100" prop="category" />
      <el-table-column label="添加时间" width="170" prop="created_at" />
      <el-table-column label="商品賣點" align="center" width="100" prop="hot_spot" />
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
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page=currentSize
         :page-sizes="[10,20,30]" :page-size="10" layout="total, sizes, prev, pager, next, jumper"
         :total="400">
      </el-pagination>
   </div>



   <el-dialog v-model="dialogFormVisible" title="新增商品" width="35%">
      <el-form :model="productCreate" label-position="right">
         <el-form-item label="商品名稱" :label-width="formLabelWidth">
            <el-col :span="24">
               <el-input v-model="productCreate.name" autocomplete="off" />
            </el-col>
         </el-form-item>
         <el-form-item label="商品分類" :label-width="formLabelWidth">
            <el-select v-model="productCreate.category" placeholder="請選擇商品類目">
               <el-option v-for="item in category" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
         </el-form-item>
         <el-form-item label="商品價格" :label-width="formLabelWidth">
            <el-col :span="24">
               <el-input v-model="productCreate.price" autocomplete="off" />
            </el-col>
         </el-form-item>
         <el-form-item label="商品賣點" :label-width="formLabelWidth">
            <el-col :span="24">
               <el-input v-model="productCreate.hot_spot" autocomplete="off" />
            </el-col>
         </el-form-item>
         <el-form-item label="商品描述" :label-width="formLabelWidth">
            <el-col :span="24">
               <el-input v-model="productCreate.description" autocomplete="off" />
            </el-col>
         </el-form-item>
      </el-form>
      <template #footer>
         <span class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false, addProduct()">
               確定
            </el-button>
         </span>
      </template>
   </el-dialog>
</template>
<script setup lang="ts">

//E3E7ED
import request from '@/utils/request';

import { reactive, toRefs, ref } from 'vue'
import { Search, Refresh } from '@element-plus/icons-vue';


export interface ProductQuery {
   name: string | undefined;
   category: string | undefined;
   page :number | undefined;
   page_size:number | undefined;
}

export interface ProductCreate {
   name: string | undefined;
   category: string | undefined;
   price: number | undefined;
   hot_spot: string | undefined;
   description: string | undefined;

}

const dialogFormVisible = ref(false);
const formLabelWidth = '80px';

let currentSize = ref(1);

const state = reactive({
   productList: [],
   category: [{ value: "", label: "" }],
   produtQuery: {} as ProductQuery,
   productCreate: {} as ProductCreate
})

const {
   productList,
   produtQuery,
   category,
   productCreate
} = toRefs(state);


const addProduct = () => {
   request({
      url: '/admin/product',
      method: 'post',
      params: productCreate.value
   }).then((res) => {
      showProducts()
   })


}

const showProducts = () => {
   produtQuery.value.page=1;
   produtQuery.value.page_size=10;
   //列表
   request({
      url: '/admin/product',
      method: 'get',
      params: produtQuery.value
   }).then((res) => {
      productList.value = res.data.data
   })

}

const serachData = () => {
   //列表
   request({
      url: '/admin/product',
      method: 'get',
      params: produtQuery.value
   }).then((res) => {
      productList.value = res.data.data
   })

}


showProducts()



//種類選單
request({
   url: '/admin/product/category',
   method: 'get',
}).then((res) => {
   const optionList: any = [];
   const data = res.data
   data.forEach((k: any) => {
      const option: any = { value: "", label: "" };
      option.value = k
      option.label = k
      optionList.push(option);
   });
   category.value = optionList
})






const handleSizeChange = (val: number) => {
   currentSize.value=val
   produtQuery.value.page=val;


}

const handleCurrentChange = (val: number) => {
   currentSize.value=val
   produtQuery.value.page=val;
   serachData();
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

