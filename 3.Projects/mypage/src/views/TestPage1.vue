<!-- 각종 CSS들을 테스트 해보는 페이지 -->
<template>

  <div class = "box-wrapper">
    margin-padding-test
    <div id="test1-testarea">
      <div id= "test1-margin">
          <div id = "test1-padding">
              <div id = "test1-content">
              </div>
          </div>
      </div>
    </div>


    
    <div style="background-color:#fbb">
      <div class ="test1_box1 test1_common_box">
        BOX1
      </div>
      <div class ="test1_box2 test1_common_box">
        BOX2
      </div>
      <div class ="test1_box3 test1_common_box">
        BOX3
      </div>
    </div>
    <div style="background-color:#bfb">
      <div class ="test1_box1 test1_inline_box">
        BOX1
      </div>
      <div class ="test1_box2 test1_inline_box">
        BOX2
      </div>
      <div class ="test1_box3 test1_inline_box">
        BOX3
      </div>
    </div>
    <div style="background-color:#bbf">
      <div class ="test1_box1 test1_inline_block_box">
        <p class="test1_content">BOX1</p>
      </div>
      <div class ="test1_box2 test1_inline_block_box">
        <p class="test1_content">BOX2</p>
      </div>
      <div class ="test1_box3 test1_inline_block_box">
        <p class="test1_content">BOX3</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.box-wrapper{
  border: 1px solid black;
  max-height: 100%;
  max-width: 100%;
  min-width: 100px;
  min-height: 100px;
  
}
.test1_common_box{
  display: block;
  border: 1px solid black;
  max-height: 100%;
  max-width: 100%;
  min-width: 100px;
  min-height: 100px;
}
.test1_inline_box{
  display: inline;
  border: 1px solid black;
  max-height: 100%;
  max-width: 100%;
  min-width: 100px;
  min-height: 100px;
}

.test1_inline_block_box{
  display: inline-table;
  border: 1px solid black;
  max-height: 100%;
  max-width: 100%;
  min-width: 100px;
  min-height: 100px;
}
.test1_box1{
  width: 100px;
 height: 100px;
}

.test1_box2{
  width: 100px;
  height: 100px;
}

.test1_box3{
  width: 100px;
  height: 100px;
}
.test1_content{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

#test1-testarea{
  background-color: #ddd;
}





#test1-margin{
  background-color:#bbf;
  width: 200px;
  height: 200px;

  border: 1px solid black;
  box-sizing: border-box;
  
  display: flex;
  justify-content: center;
  align-items: center;
  margin:0 auto;

}
#test1-padding{
  background-color: #dfd;
  width: 150px;
  height: 150px;

  border: 1px solid black;
  margin: 25px;
  padding: 25px;
  box-sizing: border-box;
  
  display: flex;
  justify-content: center;
  align-items: center;
}
#test1-content{
  background-color: #fdd;
  border: 1px solid black;
  width: 100%;
  height: 100%;
}

</style>