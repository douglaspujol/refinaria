import produce from 'immer';

export const INITIAL_STATE = {
    valueInput: 'VALOR DO INPUT',
    results: [],
    total: null,
    type: null,
};
export default function pesquisa(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@add/RESULTS': {
                const { results } = action.payload;
                draft.results = results;
                break;
            }
            case '@number/RESULTS': {
                const { number } = action.payload;
                draft.total = number;
                break;
            }

            default:
        }
    });
}
/*
   {
            Title: 'Back to the Future',
            Year: '1985',
            imdbID: 'tt0088763',
        },
*/
