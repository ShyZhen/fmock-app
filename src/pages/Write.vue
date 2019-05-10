<template>
    <div>
        <header-bar :title="title" :pre-page="prePage"></header-bar>
        <div>
            <mt-field placeholder="Title ..." v-model="postTitle"></mt-field>
            <quill-editor
                v-model="postContent"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @change="onEditorChange($event)">
            </quill-editor>
            <div>
                <mt-switch v-model="anonymous">匿名发布</mt-switch>
                <mt-button @click.native="submitPost">提交</mt-button>
            </div>
        </div>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import Vue from 'vue'
    import HeaderBar from '../components/HeaderBar'
    import TabBar from '../components/TabBar'
    import Common from '../assets/js/common'
    import { Toast, Switch, Field, Button } from 'mint-ui';
    import  '../plugins/editor/vue-quill-editor'

    Vue.component(Switch.name, Switch);
    Vue.component(Field.name, Field);
    Vue.component(Button.name, Button);

    export default {
        name: 'Index',
        data () {
            return {
                title: '发声',
                prePage: false,
                postTitle: '',
                postContent: '',
                anonymous: false,
                editorOption: {
                    modules: {
                        toolbar: {
                            container:[
                                [{ 'header':  3}],
                                ['bold', 'italic', 'underline', 'strike',],
                                ['blockquote', 'code-block', 'link', 'image',],
                                [{ 'color': [] }, { 'background': [] }],
                                [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'align': [] }],
                            ],
                            handlers: {'image': this.imageHandler}
                        }
                    },
                    placeholder: 'Compose an epic...',
                    readOnly: false,
                    theme: 'bubble'    // snow
                },
            }
        },
        components: {
            HeaderBar,
            TabBar,
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill
            }
        },
        mounted() {
            Common.checkLogin();
            // console.log('this is current quill instddddance object', this.editor)
        },
        methods: {
            onEditorBlur: function (quill) {
                // console.log('editor blur!', quill)
            },
            onEditorFocus: function (quill) {
                // console.log('editor focus!', quill)
            },
            onEditorChange: function ({ quill, html, text }) {
                // console.log('editor change!', quill, html, text)
                // this.postContent = html
            },
            imageHandler: function () {
                let input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
                input.click();
                // 监听上传
                input.onchange = () => {
                    let file = input.files[0];
                    if (/^image\//.test(file.type)) {
                        this.saveImage(file);
                    } else {
                        Toast('只能上传图片哦');
                    }
                };
            },
            saveImage: function (file) {
                let fd = new FormData();
                fd.append('image', file);
                let url = 'file/image';
                this.$http.post(url, fd).then(res => {
                    if (res.status === 201) {
                        this.insertImage(res.body.data)
                    }
                }, res => {
                    if (res.status !== 0) {
                        Toast(res.status + res.body.message)
                    }
                })
            },
            insertImage: function (url) {
                let range = this.editor.getSelection();
                this.editor.insertEmbed(range.index, 'image', url)
            },
            submitPost: function () {
                // 必须有文字内容和title
                if (this.postTitle && this.postContent) {
                    let data = {
                        title: this.postTitle,
                        content: this.postContent,
                        anonymous: this.anonymous,
                        summary: this.editor.getText().slice(0, 80),
                        poster: this.imgUrlFun(this.postContent),
                        type: 'share'
                    };
                    // console.log(data);
                    let url = 'post';
                    this.$http.post(url, data).then(res => {
                        if (res.status === 201) {
                            Common.redirect('发布成功', '/index', 2000);
                        }
                    }, res => {
                        if (res.status !== 0) {
                            Toast(res.status + res.body.message)
                        }
                    })
                } else {
                    Toast('啊嘞！是不是少写了什么')
                }
            },
            // 正则匹配第一幅图片,作为海报传递给后台
            imgUrlFun: function (str) {
                let data = '';
                str.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/, function (match, capture) {
                    data =  capture;
                });
                return data
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .quill-editor {
        height: 300px;
        margin: 0 0 20% 0;
    }
</style>
