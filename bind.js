/**
 * Необходимо реализовать функцию bind(f, context)
 */

function bind(f, context) {
  const bindArgs = [].slice.call(arguments, 2);
  return function() {
    const fnArgs = [].slice.call(arguments);
    return f.apply(context, bindArgs.concat(fnArgs));
  };
};
