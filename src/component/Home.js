const Home = () => {
    return (
        <div className="container">
            <div className="mt-2">
                <h5>Yêu cầu:</h5>
                <ul>
                    <li>
                        Sử dụng API từ trang web <a href="https://reqres.in">https://reqres.in</a> để tạo website.
                    </li>
                    <li>
                        Sử dụng framework ReactJs để tạo một màn hình website cơ bản bao gồm các chức năng:
                        <ol className="d-flex flex-column gap-2 my-2">
                            <li>Đăng nhập</li>
                            <li>Thêm User</li>
                            <li>Sửa User</li>
                            <li>Xoá User</li>
                            <li>Hiển thị tất cả các User</li>
                            <li>Tìm kiếm User theo Id</li>
                            <li>Sắp xếp theo FirstName</li>
                            <li>Import User từ file .csv</li>
                            <li>Export User ra file .csv</li>
                        </ol>
                    </li>
                    <li>
                        Tự do tùy chỉnh html, css, để có một website nhẹ nhàng, khoa học và đẹp.
                    </li>
                    <li>
                        Commit và đẩy source code lên github public.
                    </li>
                    <li>
                        Triển khai website lên <u>Heroku</u> để demo.
                    </li>
                </ul>
                <h5>Result</h5>
                <ul>
                    <li>
                        Thời gian hoàn thành: <span className="text-danger">1-3 ngày</span>
                    </li>
                    <li>
                        Gửi link Heroku và Github link lại email này
                    </li>
                    <li>
                        Thời gian phản hồi 2 ngày làm việc kể từ ngày nhận được bài thi.
                    </li>
                </ul>

            </div>
        </div>
    )
}
export default Home;
