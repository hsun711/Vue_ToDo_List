<template>
    <div>
        <div class="task">
            <label for="task">項目名稱：</label>
            <input id="task"
                v-model="inputItem.taskName"
                type="text"
                name="task"
            >
        </div>
        <div class="taskType">
            <form action="get">
                <span>任務分類：</span>
                <select id="type" v-model="inputItem.taskType" name="type">
                    <option value="">
                        請選擇
                    </option>
                    <option value="work">
                        工作
                    </option>
                    <option value="home">
                        家事
                    </option>
                    <option value="friend">
                        社交
                    </option>
                    <option value="other">
                        其他
                    </option>
                </select>
            </form>
        </div>
        <div class="taskDate">
            <span>完成日期：</span>
            <date-picker v-model="inputItem.expDate"
                placeholder="完成日期"
                value-type="format"
                class="datePicker"
            >
                {{ `${inputItem.expDate}` }}
            </date-picker>
        </div>
        <div class="taskTag">
            <label for="tag">任務備註：</label>
            <input id="tag"
                v-model="inputItem.taskTag"
                class="task"
                type="text"
                placeholder="例如：aaa,bbb"
            >
        </div>
        <div class="trashCan">
            <i class="fa-solid fa-trash-can fa-lg" @click="removeTask"></i>
        </div>
    </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';


export default {
    components: {
        DatePicker,
    },
    filters: {},
    props: {
        item: {
            type: Object,
            default: {},
        },
        index: {
            type: Number,
            default: 1,
        }
    },
    data(){
        return {
            inputItem: {},
            defaultItem:{},
            isInputData: false,
            routeName: this.$route.query.name,
        };
    },
    computed: {
        ...mapGetters([
        ]),
    },
    watch: {
        item: {
            deep: true,
            handler(val){
                const item = JSON.stringify(this.item);
                const inputItem = JSON.stringify(this.inputItem);
                if(item !== inputItem){
                    this.inputItem = JSON.parse(item);
                }

            }
        },

        inputItem: {
            deep: true,
            handler(val){
                const inputItem = JSON.stringify(val);
                const defaultItem = JSON.stringify(this.defaultItem);
                if(defaultItem !== inputItem){
                    this.isInputData = true;
                } else {
                    this.isInputData = false;
                }
                this.$emit('change-item',{item: this.inputItem, dataChange: this.isInputData, index: this.index})
            }
        }
    },
    created(){
    },
    mounted(){
        this.inputItem = JSON.parse(JSON.stringify(this.item));
        this.defaultItem = JSON.parse(JSON.stringify(this.item));
    },
    updated(){},
    destroyed(){},
    methods: {
        ...mapActions({}),
        ...mapMutations({}),
        removeTask(){
            this.$emit('remove', {item: this.inputItem, index: this.index});
        },
    },
};
</script>
<style lang="scss" scoped>
</style>