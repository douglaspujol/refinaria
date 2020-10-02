import produce from 'immer';

export const INITIAL_STATE = {
    valueInput: 'VALOR DO INPUT',
    results: [0],
    total: null,
    type: null,
    movie: 'movie',
    serie: 'series',
    messageErr: null,
    step: 0,
    carregando: false,
};
export default function pesquisa(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@change/STEP': {
                const { step } = action.payload;
                draft.step = step;
                break;
            }
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
            case '@select/TYPE': {
                const { type } = action.payload;
                if (draft.type !== type) {
                    draft.type = type;
                }
                break;
            }
            case '@err/REQUEST': {
                const { err } = action.payload;
                draft.messageErr = err;
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
