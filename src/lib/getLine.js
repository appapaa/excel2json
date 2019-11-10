import _ from 'lodash';

const KEYS = ['word', 'similar', 'translation', 'link', 'examples']

const _trim = (v) => v ? v.trim() : v;

const getElem = (line, key) => {
    const elem = _trim(line[key]);
    if (key === 'word') {
        return elem;
    }
    else if (_.includes(['examples', 'similar'], key)) {
        return (elem || '').split('<br>').slice(1);
    }
    else if (key === 'translation') {
        return _.map((elem || '').split('<p>').slice(1), l => {
            const arr = (l || '').split('<span>')
            return { word: arr[0], comment: arr[1] };
        })
    }
    else if (key === 'link') {
        return _trim(line['word']) + '.png';
    }
}

const getLine = (line) => {
    const res = {};
    _.each(KEYS, key =>
        res[key] = getElem(line, key));
    return res;
}
export default getLine;