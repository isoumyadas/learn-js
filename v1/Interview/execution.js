// Javascript Exection context
// Javascript is Single Threaded

// two ways to exectue the code
/**
 *  1. GLOBAL EXECUTION CONTEXT => REFER this keyword
 *  2. FUNCTION EXECUTION CONTEXT
 *  // But there is exection, which is mostly use in mongoose
 *  3. EVAL EXECTION CONTEXT
 *
 * // how does js run
 * \\ this runs in two phase
 *
 * 1. Memory creation phase also known as creation phase : jo bhi variable declare uska meomory allocate hota h
 * 2. Exection Phase : aur isme us var ka exection
 *
 *
 * // EX
 *
 * const value1 = 20;
 * const value2 = 90;
 * function addNum(num1, num2) {
 *  let total = num1 + num2
 *  return total
 * }
 * const reuslt1 = addNum(value1, value2)
 * const result2 = addNum(20,50)
 *
 *
 *  Above exmaple goes in 3 phase but in different cycle
 *
 * CYCLE 1
 *
 *  1. Global Exection :  This will be there no matter what => which refer's this
 *  2. Memory Phase : which saves variable and it's value as undefined,
 *       eg: value1 = undefined
 *           value2 = undefined
 *        but function will save as addNum = defination {the whole scope and params will save as defination}
 * same for reuslt1 and result2 will save as undefined
 *
 * CYCLE 2
 *
 * 3. Exection Phase: will hold value
 *      ex: value1 -> 20;
 *          value2 -> 90;
 *
 *      but, function will not hold anything as this is not executing anything
 *
 * BUT, result1  which holds function[addNum] exection will create another exection or sandbox, which is known as "New Execution Context" => here they {create new variable environment + execution thread}
 * the number of functions you create, the number of  "New Execution Context" will happen which means memory phase and execution phase will invoked
 * so after successfully invoked or after it gets the total, it goes to global executional phase and then sanbox or `New Execution Context` get's deleted!
 *
 * then for reuslt2 same story gets invoked!!
 *
 * ////////////////////// Call-Stack \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 *
 * Global exection will be there here too,
 *
 * If there is method named one(),  then this will go to global execution  after execution it get removed form global execution
 *
 *  but if there is nested function then story is different
 *
 * which is also known as LIFO (LAST IN FIRST OUT)
 *
 * so, when you've nested functions or one or more functions then LIFO concept is invoked
 * for eg:
 * one() two() three(), then first one() get executed and after execution one() get's removed from global execution, then vice-versa for two() and three(),
 * but problem is when one() didn't get's removed from global execution then two() and three() comes but this time three() get's removed first because of LIFO concept,
 * so here one() never get's removed first it will remove three then two and then one
 *
 *
 * ++++++++ you can try on the browser => sources => snippets
 *
 */
