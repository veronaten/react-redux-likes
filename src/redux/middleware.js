import { errorOn } from "./actions";
import { COMMENT_CREATE } from "./types";

const badWords = ['козёл', "осёл"];

export function spamFilter({dispatch}) {
    return function(next) {
        return function(action) {
            if (action.type === COMMENT_CREATE) {
                console.log('spamFilter', action.data.text);
                const hasBadWords = badWords.some(res => action.data.text.includes(res));
                if (hasBadWords) {
                   return dispatch(errorOn('Respect people!'));
                }
            }
            return next(action);
        }
    }
}