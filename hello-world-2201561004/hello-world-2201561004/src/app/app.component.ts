import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public index = 0;

  public Title = '';
  public Description = '';
  public Author = '';

  public BookCollection = [
    {
      title: 'The Catcher in the Rye',
      description: 'The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951.',
      author: 'J.D. Salinger',
      rating: 0,
      countRatings: 0,
      sumRating: 0
    },
    {
      title: 'To Kill a Mockingbird',
      description: 'To Kill a Mockingbird is a novel by Harper Lee published in 1960.',
      author: 'Harper Lee',
      rating: 0,
      countRatings: 0,
      sumRating: 0
    },
    {
      title: '1984',
      description: '1984 is a dystopian social science fiction novel by English novelist George Orwell.',
      author: 'George Orwell',
      rating: 0,
      countRatings: 0,
      sumRating: 0
    },
    {
      title: 'Pride and Prejudice',
      description: 'Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813.',
      author: 'Jane Austen',
      rating: 0,
      countRatings: 0,
      sumRating: 0
    },
    {
      title: 'The Lord of the Rings',
      description: 'The Lord of the Rings is an epic high-fantasy novel by English author J.R.R. Tolkien.',
      author: 'J.R.R. Tolkien',
      rating: 0,
      countRatings: 0,
      sumRating: 0
    },
  ];

  public processNextBook() {
    this.index++;
    if (this.index >= this.BookCollection.length) {
      this.index = 0;
    }
  }

  public processPreviousBook() {
    this.index--;
    if (this.index < 0) {
      this.index = this.BookCollection.length - 1;
    }
  }

  processRating(input: number) {
    this.BookCollection[this.index].sumRating += input;
    this.BookCollection[this.index].countRatings++;
    this.BookCollection[this.index].rating =
      this.BookCollection[this.index].sumRating / this.BookCollection[this.index].countRatings;
    this.processNextBook();
  }

  processNewData() {
    this.BookCollection[this.index].title = this.Title;
    this.BookCollection[this.index].description = this.Description;
    this.BookCollection[this.index].author = this.Author;
    this.Title = '';
    this.Description = '';
    this.Author = '';
  }
}
