# Angular Sort/OrderBy Pipe (Angular v5+)

### Demo & Code Sample

[https://stackblitz.com/edit/angular-sort-orderby-pipe](https://stackblitz.com/edit/angular-sort-orderby-pipe)

## Install

```
npm install ngp-sort-pipe --save
```

## Usage

##### In HTML template

```html
{{ collection | sortBy : asc|desc }} 
{{ collection | sortBy : asc|desc : column/property_name }}
```

### Arguments

| Param                    | Type                | Details                         |
| ------------------------ | ------------------- | ------------------------------- |
| collection               | `array` or `object` | The collection or array to sort |
| order                    | `string`            | The Sort Order (asc or desc)    |
| property_name (optional) | `string`            | Name of Property to sort by     |

<br/>

Import `NgpSortModule` to your module

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app";

import { NgpSortModule } from "ngc-sort";

@NgModule({
  imports: [BrowserModule, NgpSortModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

And use pipe in your component

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "example",
  template: `
    <h1>One dimensional Array</h1>
    <ul>
      <li *ngFor="let s of clientScrips | sortBy: 'asc'">{{ s }}</li>
    </ul>
    <h1>Array of Objects (JSON)</h1>
    <h2>Sort by name</h2>
    <ul>
      <li *ngFor="let s of data | sortBy: 'asc':'name'">
        {{ s.id }}-{{ s.name }}
      </li>
    </ul>
    <h2>Sort by id</h2>
    <ul>
      <li *ngFor="let s of data | sortBy: 'desc':'id'">
        {{ s.id }}-{{ s.name }}
      </li>
    </ul>
  `
})
export class AppComponent {
  clientScrips = ["html", "css", "javascript", "angular", "react"];
  data = [
    { id: 100, name: "Mike" },
    { id: 104, name: "John" },
    { id: 102, name: "David" },
    { id: 101, name: "Jane" },
    { id: 103, name: "Steve" }
  ];
}
```
