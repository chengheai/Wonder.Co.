// （1）baseUrl：模块默认加载路径；

// （2）paths：自定义模块加载路径；

// （3）shim：定义模块之间的依赖关系。

require.config({
  'baseUrl': './app',
  'paths': {
    'jquery': '../js/jquery',
    'bootstrap': '../js/bootstrap.min',
    'test': '../js/test'
  },
  'shim': {
    'bootstrap': {
      'deps': ['jquery']
    },
    'test': {
      'deps': ['jquery', 'bootstrap']
    }
  }
})