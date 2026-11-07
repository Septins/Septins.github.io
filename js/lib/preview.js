mixins.preview = {
    data() {
        return { previewShow: false };
    },
    created() {
        this.renderers.push(this.preview);
    },
    methods: {
        preview() {
            let preview = this.$refs.preview,
                content = this.$refs.previewContent;
            // 只给文章正文里的图片挂预览，避免首页封面/头像/目录缩略图误触全屏白纱
            let images = document.querySelectorAll(".article .content img");
            for (let i of images)
                i.addEventListener("click", () => {
                    content.alt = i.alt;
                    content.src = i.src;
                    this.previewShow = true;
                });
            preview.addEventListener("click", () => {
                this.previewShow = false;
            });
            window.addEventListener("resize", () => {
                this.previewShow = false;
            });
        },
    },
};
