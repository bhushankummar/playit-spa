import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVideoPlaylistComponent } from './show-video-playlist.component';

describe('ShowVideoPlaylistComponent', () => {
  let component: ShowVideoPlaylistComponent;
  let fixture: ComponentFixture<ShowVideoPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowVideoPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVideoPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
