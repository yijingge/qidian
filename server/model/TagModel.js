import query from '../utils/query'
import escape from '../utils/escape'
class TagModel {
    async updateTag(id, tags) {
        return await query(escape`UPDATE ARTICLE SET tags=${tags} WHERE id=${id}`)
    }
}
export default new TagModel()