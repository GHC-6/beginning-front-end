# 常用设计模式之 java 总结

## 静态工厂模式 + 反射控制入参范围
### 优点
- 静态工厂方法的一个优点是，不像构造方法，它们是有名字的。
- 与**构造**方法不同，它们不需要每次调用时都创建一个新对象。
- 与**构造**方法不同，它们可以返回其返回类型的任何子类型的对象。
- 静态工厂返回对象的类可以根据输入参数的不同而不同
- 在编写包含该方法的类时，返回的对象的类不需要存在。
### 缺点
- 没有公共或受保护构造方法的类不能被子类化。
- 程序员很难找到它们

### 代码示例
```java
public interface IPrinter {
    void print();
}

public class CanonPrinter implements IPrinter {
    @Override
    public void print() {
        System.out.println("佳能打印机打印...");
    }
}

public class HPPrinter implements IPrinter {

    @Override
    public void print(){
        System.out.println("HP 打印机打印...");
    }
}

public class PrinterFactory {

    public static IPrinter createPrinter(Class<? extends IPrinter> clazz) throws IllegalAccessException, InstantiationException{
        return clazz.newInstance();
    }

    public static void main(String [] args) throws IllegalAccessException, InstantiationException{
        IPrinter canonPrinter = PrinterFactory.createPrinter(CanonPrinter.class);
        canonPrinter.print();
    }
}

```
###小结
- 一个类允许客户端获取其实例的传统方式是提供一个公共构造方法。 其实还有另一种技术应该成为每个程序员工具箱的一部分。 一个类可以提供一个公共静态工厂方法，它只是一个返回类实例的静态方法。 下面是一个`Boolean`简单的例子（`boolean`基本类型的包装类）。 此方法将`boolean`基本类型转换为`Boolean`对象引用

  

## Builder 模式

### 优点
- 客户端代码很容易编写，更重要的是易于阅读。
- 链式 API 写法比较优雅
- 单个builder可以重复使用来构建多个对象。 builder的参数可以在构建方法的调用之间进行调整，以改变创建的对象。 builder可以在创建对象时自动填充一些属性，例如每次创建对象时增加的序列号。

### 缺点
- 为了创建对象，首先必须创建它的builder。虽然创建这个builder的成本在实践中不太可能被注意到，但在性能关键的情况下可能会出现问题。而且，builder模式比伸缩构造方法模式更冗长，因此只有在有足够的参数时才值得使用它，比如四个或更多。但是请记住，如果希望在将来添加更多的参数。但是，如果从构造方法或静态工厂开始，并切换到builder，当类演化到参数数量失控的时候，过时的构造方法或静态工厂就会面临尴尬的处境。因此，所以，最好从一开始就创建一个builder。

### 小结
- 当构造方法参数很多的时候  推荐使用 builder 模式 ， 内部类.build() 返回外部对象

- 当设计类的构造方法或静态工厂的参数超过几个时，Builder模式是一个不错的选择，特别是如果许多参数是可选的或相同类型的。客户端代码比使用伸缩构造方法（telescoping constructors）更容易读写，并且builder比JavaBeans更安全。

```java
package com.ghc.hbase.api.patterns;

/**
 * @author ：Frank Li
 * @date ：Created in 2019/6/21 14:54
 * @description：${description}
 * @modified By：
 * @version: $version$
 */
public class NutritionFacts {
    private final int servingSize;
    private final int servings;
    private final int calories;
    private final int fat;
    private final int sodium;
    private final int carbohydrate;

    public static class Builder{
        // Required parameters
        private final int servingSize;
        private final int servings;

        // Optional parameters - initialized to default values
        private int calories      = 0;
        private int fat           = 0;
        private int sodium        = 0;
        private int carbohydrate  = 0;

        public Builder(int servingSize, int servings){
            this.servings = servings;
            this.servingSize = servingSize;
        }

        public Builder calories(int val){
            this.calories = val;
            return this;
        }
        public Builder fat(int val){
            this.fat = val;
            return this;
        }
        public Builder sodium(int val){
            this.sodium = val;
            return this;
        }
        public Builder carbohydrate(int val){
            this.carbohydrate = val;
            return this;
        }
        public NutritionFacts build(){
            return new NutritionFacts(this);
        }
    }
    NutritionFacts(Builder builder){
        this.servings = builder.servings;
        this.servingSize = builder.servingSize;
        this.calories = builder.calories;
        this.fat = builder.fat;
        this.sodium = builder.sodium;
        this.carbohydrate = builder.carbohydrate;
    }

    public static void main(String [] args){
        NutritionFacts nutritionFacts = new NutritionFacts.Builder(240,8)
                .calories(100)
                .fat(5)
                .sodium(35)
                .carbohydrate(27)
                .build();
    }
}

```