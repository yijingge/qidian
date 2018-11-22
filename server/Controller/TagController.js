import Tag from '../model/TagModel'
class TagController {
    async updateTag(ctx) {
        ctx.body = await Tag.updateTag(ctx.params.id, ctx.request.body.tags)
    }

}
export default new TagController()