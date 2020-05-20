<template>
    <div class="item" v-cloak>
        <router-view></router-view>
        <router-link to="/" tag="span" class="exit"></router-link>
        <transition-group tag="ul">
            <li v-for="item of events" :key="item.id">
                <h1>标题: {{item.tip}}</h1>
                <p>内容: {{item.content}}</p>
                <span @click="deleteItem(item.id)" v-if="showDelete" class="icon"></span>
            </li>
        </transition-group>
        <button class="delete" @click="show()">-</button>
        <router-link to="/item/addItem" tag="button" class="add">+</router-link>
    </div>
</template>

<script>
export default {
    name: "Item",
    data() {
        return {
            events: this.$store.state.events,
            showDelete: false
        };
    },
    created() {
        window.addEventListener("click", e => {
            if (
                e.target.className != "delete" &&
                e.target.className != "icon"
            ) {
                this.showDelete = false;
            }
        });
    },
    methods: {
        deleteItem(id) {
            this.$store.dispatch("deleteItem", id);
        },
        show() {
            this.showDelete = true;
        }
    }
};
</script>

<style lang="less" scoped>
.v-enter,.v-leave-to {
    opacity: 0;
    transform: translateY(50px);
}
.v-enter-active,
.v-leave-active {
    transition: all 0.5s linear;
}
.v-enter-to,
.v-leave {
    opacity: 1;
}
.exit {
    width: 64px;
    height: 64px;
    background: url("../../assets/images/exit.png");
    background-size: 100% 100%;
    display: block;
    margin-left: 40px;
    margin-top: 20px;
}
.button {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    position: fixed;
    border: 1px solid #eaeaea;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.52);
    color: rgba(0, 0, 0, 0.52);
    font-size: 48px;
    outline: none;
}
.item::before {
    content: "";
    background: url("../../assets/images/bg3.jpg") no-repeat;
    background-size: 100% 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
.item {
    width: 100%;
    height: 100%;
    ul {
        width: 100%;
        padding: 40px;
        box-sizing: border-box;
        li {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #000;
            background-color: rgba(255, 255, 255, 0.52);
            margin-top: 40px;
            border-radius: 16px;
            padding: 20px;
            box-sizing: border-box;
            position: relative;
            font-size: 28px;
            h1 {
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            p {
                width: 100%;
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            span {
                position: absolute;
                right: 20px;
                width: 64px;
                height: 64px;
                background: url("../../assets/images/delete.png") no-repeat;
                background-size: 100% 100%;
            }
        }
        li:first-child {
            margin-top: 0;
        }
    }
    .add {
        .button();
        bottom: 10%;
        right: 25%;
    }
    .delete {
        .button();
        bottom: 10%;
        left: 25%;
    }
}
</style>