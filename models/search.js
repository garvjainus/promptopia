import { Schema, model, models} from 'mongoose';

const SearchSchema = new Schema ({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    searchItem:{
        type: String,
        required: [true, 'Search is required.'],
    },
});

const Search = models.Search || model('Search', SearchSchema)

export default Prompt;