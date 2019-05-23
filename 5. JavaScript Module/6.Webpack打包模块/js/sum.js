// sum.js

// ES6 Style
import add from './add';
import reduce from './reduce';

export default function sum(arr) {
    return reduce(arr, add);
}
