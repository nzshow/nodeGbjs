var fs=require('fs');
//fs.open(path, flags, [mode], callback(err,fd))  fd�ĵ���ʶ��
//0 stdin ��׼����  1 stdout ��׼���   2 ��׼�������
//fd ����

/*fs.open('./log.txt','r', function (err,fd) {
    if(err)
        console.error(err);
    else
        console.log(fd) //3
})*/

//fs.read(fd, buffer, offset, length, position, callback(err, bytesRead, buffer))
//��ָ�����ĵ���ʶ��fd��ȡ�ļ����ݡ�
//buffer �ǻ����������ݽ���д�����
//offset �ǿ�ʼ�򻺳��� buffer д���ƫ������
//length ��һ������ֵ��ָ���˶�ȡ���ֽ�����
//position ��һ������ֵ��ָ���˴����￪ʼ��ȡ�ļ������positionΪnull��������ļ���ǰ��λ�ö�ȡ���ݡ�
//�ص��������������������� (err, bytesRead, buffer)�� �ֱ�Ϊ���󣬶�ȡ���ֽںͻ�������

fs.read()