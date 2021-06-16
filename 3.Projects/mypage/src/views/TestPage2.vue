<template>
    <div class="one">
		<h1>오늘의 할 일</h1>
            <ul class="itemList">
                <li>
                    <input type="checkbox" id="item1">
                    <label for="item1">이벤트 버블링 학습</label>
                </li>
                <li>
                    <input type="checkbox" id="item2">
                    <label for="item2">이벤트 캡쳐 학습</label>
                </li>
            </ul>
	</div>
</template>

<script>
export default {
    methods :{
        addEvent(){
            /* input 태그에 event를 추가하는 코드. 이후에 추가되는 input태그에는 적용되지 않는다.
            var inputs = document.querySelectorAll('input');
            inputs.forEach(function(input) {
                input.addEventListener('click', function(event) {
                    console.log(event);
                    alert('clicked');
                });
            });
            */

            // 상위 요소인 itemlist에 이벤트를 걸어놓고 하위 요소에서 발생한 이벤트가 이벤트 버블링을 통해 올라오면 수행.
            // 이후 추가되는 input태그에도 동작이 가능해 진다.
            var itemList = document.querySelector('.itemList');
            itemList.addEventListener('click', function(event) {
                console.log(event);
                alert('clicked');
            });

            var li = document.createElement('li');
            var input = document.createElement('input');
            var label = document.createElement('label');
            var labelText = document.createTextNode('이벤트 위임 학습');

            input.setAttribute('type', 'checkbox');
            input.setAttribute('id', 'item3');
            label.setAttribute('for', 'item3');
            label.appendChild(labelText);
            li.appendChild(input);
            li.appendChild(label);
            itemList.appendChild(li);
        }
    },
    mounted(){
        this.addEvent();
    }
}

</script>

<style>

</style>