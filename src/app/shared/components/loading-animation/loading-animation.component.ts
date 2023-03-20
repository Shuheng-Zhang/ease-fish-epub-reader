import {AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {DivIdRefDirective} from '../../directives';

@Component({
  selector: 'app-loading-animation',
  templateUrl: './loading-animation.component.html',
  styleUrls: ['./loading-animation.component.scss']
})
export class LoadingAnimationComponent implements OnInit, OnDestroy, AfterViewInit {
  // @ViewChildren 获取所有线条组件元素映射(Children 表示复数)
  // @ViewChild 获取第一个匹配的组件元素映射(Child 表示单数)
  @ViewChildren(DivIdRefDirective) lineRefs: QueryList<DivIdRefDirective>;

  // 线条对象列表
  // 列表内的两个数组分别表示动画左右2列画面
  // 每个画面中有3个线条元素对象
  lineItems = [
    [{}, {}, {}],
    [{}, {}, {}]
  ];

  private animeSub: Subscription;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // 降维元素数组
    const lineEleList = this.flatLineItemElementList();

    // 订阅动画演算信号值
    // 根据信号值触发相应的线条元素动画
    this.animeSub = interval(480).subscribe(index => {
      const cur = index % 6;
      lineEleList.filter(el => el.id === cur).at(0).ref.getAnimations().at(0).play();
    });
  }

  ngOnDestroy(): void {
    // 结束订阅并停止动画演算
    if (this.animeSub) {
      this.animeSub.unsubscribe();
    }
  }

  /**
   * 将线条组件二维数组转换到一维数组
   *
   * @private
   */
  private flatLineItemElementList() {
    return this.lineRefs.map(({id, el}) => {
      const idSplit = id.split('-');

      // 第一维度序号(画面左右, 左=0, 右=1)
      const priInt = parseInt(idSplit[2], 10);
      // 第二纬度序号(单一画面内线条序号)
      const subInt = parseInt(idSplit[3], 10);

      // 单维元素序号累加基数
      // 左画面基数为0
      // 右画面基数为3
      // [0=0+0, 1=0+1, 2=0+2, 3=0+3, 4=1+3, 5=2+3]
      const baseInt = priInt === 0 ? 0 : 3;
      const idInt = baseInt + subInt;

      return { id: idInt, ref: el };
    });
  }


}
