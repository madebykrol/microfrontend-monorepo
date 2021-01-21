import { AfterViewInit, Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from 'src/app/federation-utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;
  
  constructor(
    private injector: Injector,
    private resolver: ComponentFactoryResolver
  ) { }

  ngAfterViewInit(): void {
    loadRemoteModule({
      remoteEntry: 'http://localhost:5500/remoteEntry.js',
      remoteName: 'header',
      exposedModule: './Header',
    })
      .then(m => {
        return m.HeaderComponent;
      })
      .then(comp => {
        const factory = this.resolver.resolveComponentFactory(comp);
        this.viewContainer.createComponent(factory, undefined, this.injector);
      });
  }

}
