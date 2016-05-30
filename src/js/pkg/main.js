/**
 * @file 页面入口模块
 * @author lenovo
 */

define(['../mod/foo/foo','../mod/bar/bar','../../components/test_comp_c'],function (foo,bar,visitZoo) {
    // TODO
    // 使用 test_comp_c 组件
    visitZoo('dog','tom',5);
});
